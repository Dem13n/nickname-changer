import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

export default class ChangeNickNameModal extends Modal {

  init() {
    super.init();
    this.success = false;
    this.nickname = m.prop('');
  }

  className() {
    return 'ChangeNickNameModal Modal--small';
  }

  title() {
    return app.translator.trans('dem13n.forum.nickname.change');
  }

  content() {
    if (this.success) {
      return (
        <div className="Modal-body">
          <div className="Form Form--centered">
            <p className="Text--success">{app.translator.trans('dem13n.forum.nickname.nick')} <p className="Text--red">{this.nickname()}</p> {app.translator.trans('dem13n.forum.nickname.success')}</p>
            <div className="Form-group">
              <Button className="Button Button--primary Button--block" onclick={this.hide.bind(this)}>
                {app.translator.trans('dem13n.forum.nickname.close')}
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <input type="text" name="nickname" className="FormControl"
              bidi={this.nickname}
              disabled={this.loading} />
          </div>
          <div className="Form-group">
            {Button.component({
              className: 'Button Button--primary Button--block',
              type: 'submit',
              loading: this.loading,
              children: app.translator.trans('dem13n.forum.nickname.done')
            })}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    app.session.user.save({ nickname: this.nickname() }, {
      errorHandler: this.onerror.bind(this),
    })
      .then(() => this.success = true)
      .catch(() => { })
      .then(this.loaded.bind(this));
  }
}