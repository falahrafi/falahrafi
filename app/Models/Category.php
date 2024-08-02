<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;

    public $table = 'categories';

    protected $fillable = [
        'name',
    ];

    public function tools(): BelongsToMany
    {
        return $this->belongsToMany(Tool::class, 'category_tools', 'categoryId', 'toolId');
    }
}
