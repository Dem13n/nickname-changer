import { extend } from 'flarum/extend';
import app from 'flarum/app';
import SettingsPage from 'flarum/components/SettingsPage';
import Button from 'flarum/components/Button';
import Model from 'flarum/Model';
import User from 'flarum/models/User';
import ChangeNickNameModal from './components/ChangeNickNameModal';

app.initializers.add('dem13n-nickname-changer', () => {
    User.prototype.nickname = Model.attribute('nickname');
    extend(SettingsPage.prototype, 'accountItems', function (items) {
        items.add('ChangeNickName',
            Button.component({
                children: app.translator.trans('dem13n.forum.nickname.change'),
                className: 'Button',
                onclick: () => app.modal.show(new ChangeNickNameModal())
            })
        );
    });
});
