<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryTool extends Model
{
    use HasFactory;

    public $table = 'category_tools';

    protected $fillable = [
        'categoryId',
        'toolId',
    ];
}
