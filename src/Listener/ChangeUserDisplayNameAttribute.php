<?php

namespace Dem13n\NickName\Changer\Listener;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\BasicUserSerializer;

class ChangeUserDisplayNameAttribute
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'changeUserDisplayNameAttribute']);
    }

    public function changeUserDisplayNameAttribute(Serializing $event)
    {
        if ($event->isSerializer(BasicUserSerializer::class)) {
            $user = $event->model;
            $event->attributes['displayName'] = empty($user->nickname) ? $user->display_name : $user->nickname;
        }
    }
}
