<?php

namespace Dem13n\NickName\Changer\Listener;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\User\Event\GetDisplayName;

class ChangeDisplayNameAttribute
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetDisplayName::class, function ($app) {
            return $app->user->nickname;
        });
    }
}
