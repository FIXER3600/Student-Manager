<?php

namespace App\Controllers;

use CodeIgniter\HTTP\Request;
use CodeIgniter\HTTP\Response;
use App\Models\UserModel;

class LoginController extends BaseController
{
    public function index()
    {
        // Verifica se o usuário já está logado
        if (session()->get('logged_in')) {
            return redirect()->to('/home');
        }

        // Carrega a view de login
        echo view('login');
    }

    public function auth()
    {
        $request = service('request');
        $email = $request->getPost('email');
        $password = $request->getPost('password');

        // Valida os dados de login
        if (!$this->validateLogin($email, $password)) {
            return redirect()->to('/login')->withInput();
        }

        // Tenta logar o usuário
        $userModel = new UserModel();
        $user = $userModel->attemptLogin($email, $password);

        if (!$user) {
            // Login falhou
            session()->setFlashdata('error', 'Credenciais incorretas.');
            return redirect()->to('/login');
        }

        // Login bem sucedido
        session()->set('logged_in', true);
        session()->set('user_id', $user->id);
        return redirect()->to('/home');
    }

    private function validateLogin($email, $password)
    {
        // Regras de validação
        $rules = [
            'email' => 'required|valid_email',
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