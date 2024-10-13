<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Psr\Http\Message\ServerRequestInterface;
use Tqdev\PhpCrudApi\Api;
use Tqdev\PhpCrudApi\Config\Config;

Route::redirect('/', 'https://falahrafi.com/');

Route::any('/{any}', function (ServerRequestInterface $request) {
    $config = new Config([
        'username' => 'root',
        'password' => '',
        'database' => 'falahrafi',
        'basePath' => '/v1',
    ]);
    $api = new Api($config);
    $response = $api->handle($request);
    return $response;
})->where('any', '.*');
