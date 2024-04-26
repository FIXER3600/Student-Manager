<?php

namespace App\Models;

use CodeIgniter\Model;

class Student extends Model
{
    protected $table = 'alunos';
    protected $primaryKey = 'id';
    protected $allowedFields = ['nome', 'email', 'telefone', 'endereco', 'foto'];

    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';

    protected $validationRules = [
        'nome' => 'required',
        'email' => 'required|valid_email',
        'telefone' => 'required',
        'endereco' => 'required'
    ];

    protected $validationMessages = [
        'nome' => [
            'required' => 'O campo nome é obrigatório.'
        ],
        'email' => [
            'required' => 'O campo email é obrigatório.',
            'valid_email' => 'Por favor, insira um endereço de email válido.',
        ],
        'telefone' => [
            'required' => 'O campo telefone é obrigatório.'
        ],
        'endereco' => [
            'required' => 'O campo endereço é obrigatório.'
        ]
    ];


    protected $skipValidation = false;

    // Método para mover e armazenar a foto do aluno
    public function savePhoto($id, $file)
    {
        // Verifica se o aluno existe
        $student = $this->find($id);
        if (!$student) {
            return false;
        }

        // Verifica se o arquivo de foto foi enviado
        if ($file->isValid() && !$file->hasMoved()) {
            // Define o diretório de destino para salvar a foto
            $uploadPath = WRITEPATH . 'uploads/alunos/';
            $newName = $file->getRandomName();

            // Move a foto para o diretório de destino
            if ($file->move($uploadPath, $newName)) {
                // Atualiza o nome da foto no banco de dados
                $this->update($id, ['foto' => $newName]);
                return true;
            } else {
                return false;
            }
        }

        return false;
    }
}