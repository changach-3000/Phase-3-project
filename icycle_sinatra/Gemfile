source "https://rubygems.org"

# An object-relational mapper
# https://guides.rubyonrails.org/active_record_basics.html
gem "activerecord", "~> 6.1"

# Configures common Rake tasks for working with Active Record
# https://github.com/sinatra-activerecord/sinatra-activerecord
gem "sinatra-activerecord"

# Run common tasks from the command line
# https://github.com/ruby/rake
gem "rake"

# Provides functionality to interact with a SQLite3 database
# https://github.com/sparklemotion/sqlite3-ruby
gem "sqlite3", "~> 1.4"

# Require all files in a folder
# https://github.com/jarmo/require_all
gem "require_all"
gem 'bcrypt', '~> 3.1', '>= 3.1.18'
gem 'thin', '~> 1.8', '>= 1.8.2'
gem 'puma', '~> 6.2', '>= 6.2.2'

# These gems will only be used when we are running the application locally
group :development do
  gem 'rerun', '~> 0.14.0'
  gem "pry"
end

# These gems will only be used when we are running tests
group :test do
  gem "database_cleaner"
  gem "rspec"
end