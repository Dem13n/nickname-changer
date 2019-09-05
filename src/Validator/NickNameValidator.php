<?php

namespace Dem13n\NickName\Changer\Validator;

use Flarum\Foundation\AbstractValidator;

class NickNameValidator extends AbstractValidator
{
    protected $rules = [
        'nickname' => [
            'regex:/^([a-zA-Zа-яА-Я0-9]{2,}[\r\n\t\f\v ]{0,1})+$/iu',
            'unique:users,nickname',
            'unique:users,username',
            'min:3',
            'max:30',
        ],
    ];
}
