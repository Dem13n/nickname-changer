import Modal from 'flarum/components/Modal';
import Switch from 'flarum/components/Switch';
import Button from 'flarum/components/Button';
import saveSettings from 'flarum/utils/saveSettings';

export default class NicknameChangerSettings extends Modal {

  init() {
    super.init();
    this.NicknameChange = m.prop(app.data.settings.dem13n_nickname_change === '1');
  }

  className() {
    return 'NicknameChangerSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('dem13n.admin.nickname.settings_modal_title');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form">
          <div className="Form-group">
            <Switch
              state={this.NicknameChange()}
              onchange={this.NicknameChange}>
              {app.translator.trans('dem13n.admin.nickname.allow_nickname_change')}
            </Switch>
          </div>
          <div className="Form-group">
            <Button
              className='Button Button--primary'
              type='submit'
              loading={this.loading}>
              {app.translator.trans('dem13n.admin.nickname.submit_button')}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    saveSettings({
      dem13n_nickname_change: this.NicknameChange()
    }).then(() => window.location.reload());
  }
}