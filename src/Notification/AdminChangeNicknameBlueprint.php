<?php

namespace Dem13n\NickName\Changer\Notification;

use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\User\User;

class AdminChangeNicknameBlueprint implements BlueprintInterface
{

    public $user;
    public $actor;

    public function __construct(User $user, User $actor)
    {
        $this->user = $user;
        $this->actor = $actor;
    }

    public function getSubject()
    {
        return $this->user;
    }

    public function getFromUser()
    {
        return $this->actor;
    }

    public function getData()
    {
        $content = (!$this->user->nickname) ? 'delete' : $this->user->nickname;
        return $content . '#' . date("Y-m-d H:i:s");
    }

    public static function getType()
    {
        return 'nicknameChange';
    }

    public static function getSubjectModel()
    {
        return User::class;
    }
}
