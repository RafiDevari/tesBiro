<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', '*'], // Allow all paths
    'allowed_methods' => ['*'], // Allow all HTTP methods (GET, POST, etc.)
    'allowed_origins' => ['*'], // Allow all origins, or use ['http://localhost:3000']
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'], // Allow all headers
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false, // Set to true if using authentication
];