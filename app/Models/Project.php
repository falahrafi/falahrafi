<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model
{
    use HasFactory;

    public $table = 'projects';

    protected $fillable = [
        'name',
        'about',
        'image',
        'video',
        'website',
        'sourceCode',
        'categoryId',
    ];

    public function tools(): BelongsToMany
    {
        return $this->belongsToMany(Tool::class, 'project_tools', 'projectId', 'toolId');
    }
}
