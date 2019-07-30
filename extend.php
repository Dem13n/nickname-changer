<?php

namespace Dem13n\NickName\Changer;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/NickName.less'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    function (Dispatcher $events) {
        $events->subscribe(Listener\AddUserNickNameAttribute::class);
        $events->subscribe(Listener\ChangeUserDisplayNameAttribute::class);
        $events->subscribe(Listener\SaveUserNickName::class);
    },
];
