<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = Auth::user();

        $unused_thoughts = $user->thoughts()
            ->where('idea_id', null)
            ->latest()->limit(10)->get();
        $unused_ideas = $user->ideas()
            ->where('solution_id', null)
            ->latest()->limit(10)->get();
        // $thoughts = Thought::where('user_id', $user_id)->latest()->limit(10)->get();
        // $ideas = Idea::where('user_id', $user_id)->latest()->limit(5)->get();
        $solutions = $user->solutions()->latest()->limit(5)->get();
        $products = $user->products()->latest()->limit(5)->get();

        return view('home', [
            'user' => $user,
            'unused_thoughts' => $unused_thoughts,
            'unused_ideas' => $unused_ideas,
            'solutions' => $solutions,
            'products' => $products
        ]);
    }
}
