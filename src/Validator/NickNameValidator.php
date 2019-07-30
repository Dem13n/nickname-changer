<?php

namespace Dem13n\NickName\Changer\Validator;

use Flarum\Foundation\AbstractValidator;

class NickNameValidator extends AbstractValidator
{
    protected $rules = [
        'nickname' => [
            'required',
            'regex:/^[a-zA-Zа-яА-Я0-9\s]+$/ui',
            'unique:users,nickname',
            'min:3',
            'max:30',
        ],
    ];
}
