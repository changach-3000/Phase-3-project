# runs application
require_relative "./config/environment"


use PostController
use SessionController
use UserController
use RouteController
run ApplicationController
