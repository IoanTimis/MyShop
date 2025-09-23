<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $roles  Comma or pipe separated roles (e.g. "vendor" or "vendor,admin")
     * @return mixed
     */
    public function handle(Request $request, Closure $next, string $roles)
    {
        $user = $request->user();

        // if unauthenticated, redirect to login (or abort)
        if (!$user) {
            return redirect()->route('login');
        }

        if ($roles) {
            $allowed = preg_split('/[|,]/', $roles);
            if (! in_array($user->role, $allowed, true)) {
                abort(Response::HTTP_FORBIDDEN);
            }
        }

        return $next($request);
    }
}
