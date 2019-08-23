<?php

namespace Dem13n\NickName\Changer\Listener;

use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\GetDisplayName;

class ChangeUserDisplayNameAttribute
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetDisplayName::class, function ($app) {
            return $app->user->nickname;
        });
    }
}
