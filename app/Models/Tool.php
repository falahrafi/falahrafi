<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tool extends Model
{
    use HasFactory;

    public $table = 'tools';

    protected $fillable = [
        'name',
        'logo',
        'link',
    ];

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class, 'project_tools', 'toolId', 'projectId');
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_tools', 'toolId', 'categoryId');
    }
}
