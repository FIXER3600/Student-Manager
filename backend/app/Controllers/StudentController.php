<?php

namespace App\Controllers;

use CodeIgniter\API\ResponseTrait;
use App\Models\Student;

class StudentController extends BaseController
{
    use ResponseTrait;

    // Método para listar todos os alunos
    public function index()
    {
        $model = new Student();
        $students = $model->findAll();

        return $this->respond($students);
    }

    // Método para adicionar um novo aluno
    public function create()
    {
        $model = new Student();
        $data = $this->request->getJSON();

        if ($model->insert($data)) {
            return $this->respondCreated(['message' => 'Aluno criado com sucesso']);
        } else {
            return $this->fail($model->errors());
        }
    }

    // Método para visualizar detalhes de um aluno específico
    public function show($id = null)
    {
        $model = new Student();
        $aluno = $model->find($id);

        if ($aluno === null) {
            return $this->failNotFound('Aluno não encontrado');
        }

        return $this->respond($aluno);
    }

    // Método para atualizar informações de um aluno
    public function update($id)
    {
        $model = new Student();
        $data = $this->request->getJSON(); // Obtenha os dados do corpo da solicitação

        // Verifique se o usuário existe
        $user = $model->find($id);
        if (!$user) {
            return $this->failNotFound('Usuário não encontrado');
        }

        // Atualize os dados do usuário
        $updated = $model->update($id, $data);

        if ($updated) {
            return $this->respond(['message' => 'Usuário atualizado com sucesso']);
        } else {
            return $this->fail($model->errors());
        }
    }

    // Método para excluir um aluno
    public function delete($id = null)
    {
        $model = new Student();
        $aluno = $model->find($id);

        if ($aluno === null) {
            return $this->failNotFound('Aluno não encontrado');
        }

        if ($model->delete($id)) {
            return $this->respondDeleted(['message' => 'Aluno excluído com sucesso']);
        } else {
            return $this->fail($model->errors());
        }
    }
}