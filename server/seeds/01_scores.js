exports.seed = function(knex, Promise) {

  return Promise.all([

    knex('group').del()
      .then(function () {
        return knex('group').insert(
          [
          {
            id: 1,
            title: 'Galvanize',
          },
          {
            id: 2,
            title: 'GT Ladies',
          },
          ]);
      }),
    // knex('player').del()
    //   .then(function () {
    //     return knex('player').insert(
    //       [
    //       {
    //         id: 1,
    //         name: 'Monkey Maire',
    //       },
    //       {
    //         id: 2,
    //         name: 'Jazzhands Joscelyn',
    //       },
    //       {
    //         id: 3,
    //         name: 'Laughing Lindsay',
    //       },
    //       {
    //         id: 4,
    //         name: 'Crazydoglady Chelcie',
    //       },
    //       {
    //         id: 5,
    //         name: 'Mushy Miriam :)',
    //       },
    //       ]);
    //   }),
    // knex('group_player').del()
    //   .then(function () {
    //     return knex('group_player').insert(
    //       [
    //       {
    //         id: 1,
    //         title: 'Galvanize',
    //       },
    //       {
    //         id: 2,
    //         title: 'GT Ladies',
    //       },
    //       ]).insert(
    //       [
    //       {
    //         id: 1,
    //         name: 'Monkey Maire',
    //       },
    //       {
    //         id: 2,
    //         name: 'Jazzhands Joscelyn',
    //       },
    //       {
    //         id: 3,
    //         name: 'Laughing Lindsay',
    //       },
    //       {
    //         id: 4,
    //         name: 'Crazydoglady Chelcie',
    //       },
    //       {
    //         id: 5,
    //         name: 'Mushy Miriam :)',
    //       }
    //       ]);
    //   }),
    // knex('score').del()
    //   .then(function () {
    //     return knex('score').insert(
    //       [
    //       {
    //         id: 1,
    //         score: '987654',
    //       },
    //       {
    //         id: 2,
    //         score: '876543',
    //       },
    //       {
    //         id: 3,
    //         score: '765432',
    //       },
    //       {
    //         id: 4,
    //         score: '654321',
    //       },
    //       {
    //         id: 5,
    //         score: '000400',
    //       },
    //       ]);
      // }),
  ]);
};
