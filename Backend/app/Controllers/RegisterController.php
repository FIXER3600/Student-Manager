<?php

namespace App\Controllers;

use CodeIgniter\HTTP\Request;
use CodeIgniter\HTTP\Response;
use App\Models\UserModel;

class RegisterController extends BaseController
{
    public function index()
    {
        // Verifica se o usuário já está logado
        if (session()->get('logged_in')) {
            return redirect()->to('/home');
        }

        // Carrega a view de registro
        echo view('register');
    }

    public function register()
    {
        $request = service('request');
        $name = $request->getPost('name');
        $email = $request->getPost('email');
        $password = $request->getPost('password');

        // Valida os dados de registro
        if (!$this->validateRegister($name, $email, $password)) {
            return redirect()->to('/register')->withInput();
        }

        // Tenta registrar o novo usuário
        $userModel = new UserModel();
        $userId = $userModel->register($name, $email, $password);

        if (!$userId) {
            // Falha no registro
            session()->setFlashdata('error', 'Falha ao registrar o usuário.');
            return redirect()->to('/register');
        }

        // Registro bem sucedido
        session()->setFlashdata('success', 'Usuário registrado com sucesso!');
        return redirect()->to('/login');
    }

    private function validateRegister($name, $email, $password)
    {
        // Regras de validação
        $rules = [
            'name' => 'required|min_length[3]',
            'email' => 'required|valid_email|is_unique[user.email]',
            'password' => 'required|min_length[8]',
        ];

        // Valida os dados
        $validation = service('validation');
        $validation->setRules($rules);
        $validation->run($request->getPost());

        // Retorna os erros de validação (se houver)
        return $validation->getErrors();
    }
}