
exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.createTable('players', function(table){
      table.increments('id').primary()
      table.string('username').unique()
    }),
    knex.schema.createTable('tournaments', function(table){
    	table.increments('id').primary()
    	table.string('tournament_name')
    	table.integer('winner_id').references('id').inTable('players')
    }),
    knex.schema.createTable('games', function(table){
    	table.increments('id').primary()
    	table.integer('player1_id').references('id').inTable('players')
    	table.integer('player2_id').references('id').inTable('players')
    	table.integer('player1_score').unsigned()
    	table.integer('player2_score').unsigned()
    	table.integer('player1_shots').unsigned()
    	table.integer('player2_shots').unsigned()
    	table.integer('player1_possesion').unsigned()
    	table.integer('player2_possession').unsigned()
    	table.integer('player1_shotsOnGoal').unsigned()
    	table.integer('player2_shotsOnGoal').unsigned()
    	table.integer('tournament_id').references('id').inTable('tournaments')

    })
  ])
};

exports.down = function(knex, Promise) {  
  return Promise.all([
    knex.schema.dropTable('players'),
    knex.schema.dropTable('tournaments'),
    knex.schema.dropTable('games')
  ])
};