<?php

namespace App\Models;

use CodeIgniter\Model;

class User extends Model
{
    protected $table = 'user';
    protected $primaryKey = 'id';
    protected $allowedFields = ['id','name', 'email', 'password'];


    protected $validationRules = [
        'name' => 'required',
        'email' => 'required|valid_email|is_unique[user.email]',
        'password' => 'required',
       
    ];

    protected $validationMessages = [
        'name' => [
            'required' => 'O campo nome é obrigatório.'
        ],
        'email' => [
            'required' => 'O campo email é obrigatório.',
            'valid_email' => 'Por favor, insira um endereço de email válido.',
            'is_unique'=>'Email já cadastrado'
        ],
        'password' => [
            'required' => 'A senha é obrigatória.'
        ],
    
    ];

    protected $skipValidation = false;

   
}