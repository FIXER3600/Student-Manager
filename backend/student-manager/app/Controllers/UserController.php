<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\User;
use Firebase\JWT\JWT;

/**
 * @OA\Get(
 *     path="/students",
 *     summary="Lista todos os alunos",
 *     @OA\Response(response="200", description="Sucesso")
 * )
 */
class UserController extends BaseController
{
    use ResponseTrait;

    // Método para listar todos os alunos
    public function index()
    {
        $model = new User();
        $user = $model->findAll();

        return $this->respond($user);
    }

    // Método para adicionar um novo aluno
    public function create()
    {
        $model = new User();
        $data = $this->request->getJSON();

        if ($model->insert($data)) {
            return $this->respondCreated(['message' => 'Conta criada com sucesso']);
        } else {
            return $this->fail($model->errors());
        }
    }
    public function update($id = null)
    {
        $model = new User();
        $data = $this->request->getJSON();

        if ($model->update($id, $data)) {
            return $this->respond(['message' => 'Usuário atualizado com sucesso']);
        } else {
            return $this->fail($model->errors());
        }
    }

    // Método para encontrar um usuário por e-mail
    private function findUserByEmail($email)
    {
        $model = new User();
        $resultado = $model->where('email', $email)->first();

        return $resultado;
    }

    // Método para fazer login
    public function login()
    {
        $request = \Config\Services::request(); // Obtenha o serviço de solicitação do framework
        
        $data = $request->getJSON(); // Obtenha os dados do corpo da solicitação

        $email = $data->email; // Obtenha o email dos dados da solicitação

        // Aqui você pode continuar com sua lógica de autenticação
        $user = $this->findUserByEmail($email);
      
        if ($user) {
            $issuedAt = time();
            $expirationTime = $issuedAt + 3600;  // jwt válido por 1 hora a partir do momento da emissão
            $payload = array(
                'id'=>$user['id'],
                'email' => $user['email'],
                'iat' => $issuedAt,
                'exp' => $expirationTime
            );

            $jwt = JWT::encode($payload, 'segredo_delta', 'HS256');
            return $this->respond(['token' => $jwt]);
        } else {
            return $this->failUnauthorized('Usuário não encontrado');
        }
    }
}