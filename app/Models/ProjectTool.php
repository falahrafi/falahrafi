<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectTool extends Model
{
    use HasFactory;

    public $table = 'project_tools';

    protected $fillable = [
        'projectId',
        'toolId',
    ];
}
