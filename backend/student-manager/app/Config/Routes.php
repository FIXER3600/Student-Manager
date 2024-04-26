<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/students', 'StudentController::index'); // Listar todos os students
$routes->post('/student', 'StudentController::create'); // Adicionar um novo aluno
$routes->get('/student/(:num)', 'StudentController::show/$1'); // Visualizar detalhes de um aluno específico
$routes->put('/students/(:num)', 'StudentController::update/$1'); // Atualizar informações de um aluno
$routes->delete('/students/(:num)', 'StudentController::delete/$1'); // Excluir um aluno

$routes->post('/signup', 'UserController::create'); // Criar conta no sistema
$routes->post('/login', 'UserController::login'); // Logar no sistema