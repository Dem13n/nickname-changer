<?php

namespace Dem13n\NickName\Changer\Listener;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\User\AssertPermissionTrait;
use Flarum\User\Event\Saving;
use Dem13n\NickName\Changer\Validator\NickNameValidator;
use Flarum\Notification\NotificationSyncer;
use Dem13n\NickName\Changer\Notification\AdminChangeNicknameBlueprint;


class SaveNickNameAndSendNotification
{
    use AssertPermissionTrait;

    protected $validator;
    protected $notifications;

    public function __construct(NickNameValidator $validator, NotificationSyncer $notifications)
    {
        $this->validator = $validator;
        $this->notifications = $notifications;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Saving::class, [$this, 'saveNickName']);
    }

    public function sendNotification($actor, $user)
    {
        if (($actor->isAdmin() || $actor->hasPermission('user.edit')) && $actor->id !== $user->id) {
            $this->notifications->sync(
                new AdminChangeNicknameBlueprint($user, $actor),
                [$user]
            );
        }
    }

    public function saveNickName(Saving $event)
    {
        $user = $event->user;
        $data = $event->data;
        $actor = $event->actor;

        $isSelf = $actor->id === $user->id;
        $canEdit = $actor->can('edit', $user);
        $attributes = array_get($data, 'attributes', []);

        if (isset($attributes['nickname'])) {
            if (!$isSelf) {
                $this->assertPermission($canEdit);
            }
            $user->nickname = $attributes['nickname'];
            $this->validator->assertValid($user->getAttributes());
            $user->save();
            $this->sendNotification($actor, $user);
        }
    }
}
