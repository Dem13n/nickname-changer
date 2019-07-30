<?php

namespace Dem13n\NickName\Changer\Listener;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\CurrentUserSerializer;

class AddUserNickNameAttribute
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addUserNickNameAttribute']);
    }

    public function addUserNickNameAttribute(Serializing $event)
    {
        if ($event->isSerializer(CurrentUserSerializer::class)) {
            $event->attributes['nickname'] = $event->actor->nickname;
        }
    }
}
