'use strict'

var test_it = {git : 0};

function check_neighbours_up(map , j , i) {
    var count = 0;

    if (j == 0) {
        // map[-1][-1]
        if (map[N - 1][M - 1]) {
            count++;
        }
        // map[-1][0]
        if (map[N - 1][0]) {
            count++;
        }
        // map[-1][1]
        if (map[N - 1][1]) {
            count++;
        }
        // map[0][-1]
        if (map[0][M - 1]) {
            count++;
        }
        // map[0][+1]
        if (map[0][1]) {
            count++;
        }
        // map[+1][-1]
        if (map[1][M - 1]) {
            count++;
        }
        // map[+1][0]
        if (map[1][0]) {
            count++;
        }
        // map[+1][+1]
        if (map[1][1]) {
            count++;
        }
    } else if (j == (M - 1)) {
        // map[-1][-1]
        if (map[N - 1][M - 2]) {
            count++;
        }
        // map[-1][0]
        if (map[N - 1][M - 1]) {
            count++;
        }
        // map[-1][1]
        if (map[N - 1][0]) {
            count++;
        }
        // map[0][-1]
        if (map[0][M - 2]) {
            count++;
        }
        // map[0][+1]
        if (map[0][0]) {
            count++;
        }
        // map[+1][-1]
        if (map[1][M - 2]) {
            count++;
        }
        // map[+1][0]
        if ( map[1][M - 1] ) {
            count++;
        }
        // map[+1][+1]
        if (map[1][0]) {
            count++;
        }
    } else {
        // map[-1][-1]
        if (map[N - 1][j - 1]) {
            count++;
        }
        // map[-1][0]
        if (map[N - 1][j]) {
            count++;
        }
        // map[-1][+1]
        if (map[N - 1] [j + 1]) {
            count++;
        }
        // map[0][-1]
        if (map[i][M - 1]) {
            count++;
        }
        // map[0][+1]
        if (map[i][j + 1]) {
            count++;
        }
        // map[+1][-1]
        if (map[i + 1][j - 1]) {
            count++;
        }
        // map[+1][0]
        if (map[i + 1][j]) {
            count++;
        }
        // map[+1][+1]
        if (map[i + 1][j + 1]) {
            count++;
        }
    }

    return count;
}
function check_neighbours_left(map , j , i) {
    var count = 0;

    // map[-1][-1]
    if (map[i - 1][M - 1]) {
        count++;
    }
    // map[-1][0]
    if (map[i - 1][j]) {
        count++;
    }
    // map[-1][+1]
    if (map[i - 1][j + 1]) {
        count++;
    }
    // map[0][-1]
    if (map[i][M - 1]) {
        count++;
    }
    // map[0][+1]
    if (map[i][j + 1]) {
        count++;
    }
    // map[+1][-1]
    if (map[i + 1][M - 1]) {
        count++;
    }
    // map[+1][0]
    if (map[i + 1][j]) {
        count++;
    }
    // map[+1][+1]
    if (map[i + 1][j + 1]) {
        count++;
    }

    return count;
}
function check_neighbours_down(map , j , i) {
    var count = 0;

    if ( j == 0 ) {
        // map[-1][-1]
        if (map[N - 2][M - 1]) {
            count++;
        }
        // map[-1][0]
        if (map[i - 1][j]) {
            count++;
        }
        // map[-1][+1]
        if (map[i - 1] [j + 1]) {
            count++;
        }
        // map[0][-1]
        if (map[N - 1][M - 1]) {
            count++;
        }
        // map[0][+1]
        if (map[i][j + 1]) {
            count++;
        }
        // map[+1][-1]
        if (map[0][M - 1]) {
            count++;
        }
        // map[+1][0]
        if (map[0][0]) {
            count++;
        }
        // map[+1][+1]
        if (map[0][1]) {
            count++;
        }
    } else if ( j == (M - 1) ) {
        // map[-1][-1]
        if (map[N - 2][M - 2]) {
            count++;
        }
        // map[-1][0]
        if (map[i - 1][j]) {
            count++;
        }
        // map[-1][+1]
        if (map[N - 2][0]) {
            count++;
        }
        // map[0][-1]
        if (map[N - 1][M - 2]) {
            count++;
        }
        // map[0][+1]
        if (map[N - 1][0]) {
            count++;
        }
        // map[+1][-1]
        if (map[0][M - 2]) {
            count++;
        }
        // map[+1][0]
        if (map[N - 1][M - 1]) {
            count++;
        }
        // map[+1][+1]
        if (map[0][0]) {
            count++;
        }
    } else {
        // map[-1][-1]
        if (map[i - 1][j - 1]) {
            count++;
        }
        // map[-1][0]
        if (map[i - 1][j]) {
            count++;
        }
        // map[-1][+1]
        if (map[i - 1][j + 1]) {
            count++;
        }
        // map[0][-1]
        if (map[i][j - 1]) {
            count++;
        }
        // map[0][+1]
        if (map[i][j + 1]) {
            count++;
        }
        // map[+1][-1]
        if (map[0][j - 1]) {
            count++;
        }
        // map[+1][0]
        if (map[0][j]) {
            count++;
        }
        // map[+1][+1]
        if (map[0][j + 1]) {
            count++;
        }
    }

    return count;
}
function check_neighbours_right(map , j , i) {
    var count = 0;

    // map[-1][-1]
    if (map[i - 1][j - 1]) {
        count++;
    }
    // map[-1][0]
    if (map[i - 1][j]) {
        count++;
    }
    // map[-1][+1]
    if (map[i - 1][0]) {
        count++;
    }
    // map[0][-1]
    if (map[i][j - 1]) {
        count++;
    }
    // map[0][+1]
    if (map[i][0]) {
        count++;
    }
    // map[+1][-1]
    if (map[i + 1][j - 1]) {
        count++;
    }
    // map[+1][0]
    if (map[i + 1][j]) {
        count++;
    }
    // map[+1][+1]
    if (map[i + 1][0]) {
        count++;
    }

    return count;
}

function get_new_map(map) {

    // declaring new map ---------------------------------------------------------------------------
    var new_map = new Array(N);

    for (var k = 0 ; k < N ; k++) {
        new_map[k] = new Array(M)
    }

    for (var b = 0 ; b < N ; b++) {
        for (var j = 0 ; j < M ; j++) {
            new_map[b][j] = 0;
        }
    }

    //initializing new map ----------------------------------------------------------------------------------------------
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < M; j++) {

            var count = 0;

            if (i == 0) {
                count = check_neighbours_up(map, j, i);
            } else if (j == 0 && i != (N - 1) ) {
                count = check_neighbours_left(map, j, i);
            } else if (i == N - 1) {
                count = check_neighbours_down(map, j, i);
            } else if (j == M - 1) {
                count = check_neighbours_right(map, j, i);
            } else {
                // map[-1][-1]
                if (map[i - 1][j - 1]) {
                    count++;
                }
                // map[-1][0]
                if (map[i - 1][j]) {
                    count++;
                }
                // map[-1][+1]
                if (map[i - 1][j + 1]) {
                    count++;
                }
                // map[0][-1]
                if (map[i][j - 1]) {
                    count++;
                }
                // map[0][+1]
                if (map[i][j + 1]) {
                    count++;
                }
                // map[+1][-1]
                if (map[i + 1][j - 1]) {
                    count++;
                }
                // map[+1][0]
                if (map[i + 1][j]) {
                    count++;
                }
                // map[+1][+1]
                if (map[i + 1][j + 1]) {
                    count++;
                }
            }

            if (count == 3) {
                if (map[i][j] > 0) {
                    if (map[i][j] < 250) {
                        new_map[i][j] = map[i][j] +1;
                    } else {
                        new_map[i][j] = 250;
                    }
                } else {
                    new_map[i][j] = 1;
                }
            }

            if (map[i][j] > 0 && count == 2) {
                if (map[i][j] > 0) {
                    if (map[i][j] < 250) {
                        new_map[i][j] = map[i][j] + 1;
                    } else {
                        new_map[i][j] = 250;
                    }
                } else {
                    new_map[i][j] = 1;
                }
            }

        }
    }

    // asigning
    for (var i = 0; i < N; i++) {
        for (var j = 0; j < M; j++) {
            map[i][j] = new_map[i][j];
        }
    }

    //deleting new map ------------------------------------------------------------------------------------------------
    for (var i = 0; i < N; i++) {
        delete new_map[i];
    }
}

var value = 4

function reinit() {
    value++;

    console.log(value);
}