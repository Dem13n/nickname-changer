<?php

namespace Dem13n\NickName\Changer;

use Flarum\Extend;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Api\Serializer\BasicUserSerializer;
use Flarum\Event\ConfigureNotificationTypes;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/NickName.less'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    function (Dispatcher $events) {
        $events->subscribe(Listener\AddAttributes::class);
        $events->subscribe(Listener\ChangeDisplayNameAttribute::class);
        $events->subscribe(Listener\SaveNickNameAndSendNotification::class);
        $events->listen(ConfigureNotificationTypes::class, function (ConfigureNotificationTypes $event) {
            $event->add(Notification\AdminChangeNicknameBlueprint::class, BasicUserSerializer::class, ['alert']);
        });
    },
];
