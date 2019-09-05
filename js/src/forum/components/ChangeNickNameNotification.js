import Notification from 'flarum/components/Notification';

export default class ChangeNickNameNotification extends Notification {
  icon() {
    return 'fas fa-id-badge';
  }

  href() {
    return app.route.user(this.props.notification.subject());
  }

  content() {
    const notification = this.props.notification;
    const nickname = notification.content();

    const nickname_delete = app.translator.trans('dem13n.forum.nickname.admin_delete_nickname', {
      user: notification.fromUser()
    });

    const nickname_change = app.translator.trans('dem13n.forum.nickname.admin_change_nickname', {
      user: notification.fromUser(),
      actor: notification.content().split('#')[0]
    });

    return (nickname.indexOf('delete#') !== -1) ? nickname_delete : nickname_change;
  }
}