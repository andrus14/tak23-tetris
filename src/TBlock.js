import { Block } from "./Block.js";

class TBlock extends Block {

    shapes = [
        {   
            'height': 2,
            'width': 3,
            'shape': [[0, 0], [0, 1], [0, 2], [1, 1]]
        },
    ];

    class = 't-block';

}

export { TBlock }