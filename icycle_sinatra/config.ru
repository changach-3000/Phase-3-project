# runs application
require_relative "./config/environment"


use PostController
use SessionController
use UserController
run ApplicationController
