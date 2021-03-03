/**
 ****□□□□****
 **/
class BlockTypeOne {
  constructor() {
    this.widthBlockCount = 4;
    this.widthBlockMarginCount = 0;
    this.heightBlockCount = 1;
    this.heightBlockMarginCount = 1;
    this.blockColor = "#8CD6F3";
    this.shape = [
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
    ];
    this.rotationBlueprint = [
      [
        [2, -1],
        [2, 0],
        [2, 1],
        [2, 2],
      ],
      [
        [-2, 1],
        [-1, 1],
        [0, 1],
        [1, 1],
      ],
    ];
  }
}

/**
 *****□******
 ****□□□*****
 **/
class BlockTypeTwo {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 1;
    this.blockColor = "#BC48A9";
    this.shape = [
      [1, 2],
      [2, 1],
      [2, 2],
      [3, 2],
    ];
    this.rotationBlueprint = [
      [
        [1, -1],
        [1, 0],
        [1, 1],
        [2, 0],
      ],
      [
        [-1, 1],
        [0, 1],
        [0, 2],
        [1, 1],
      ],
      [
        [0, 0],
        [1, -1],
        [1, 0],
        [1, 1],
      ],
      [
        [0, 0],
        [1, -1],
        [1, 0],
        [2, 0],
      ],
    ];
  }
}

/**
 *****□□*****
 *****□□*****
 **/
class BlockTypeThree {
  constructor() {
    this.widthBlockCount = 2;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 1;
    this.blockColor = "#EFC23C";
    this.shape = [
      [1, 1],
      [1, 2],
      [2, 1],
      [2, 2],
    ];
    this.rotationBlueprint = [];
  }
}

/**
 ****□□******
 *****□□*****
 **/
class BlockTypeFour {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 1;
    this.blockColor = "#CF3656";
    this.shape = [
      [1, 1],
      [2, 1],
      [2, 2],
      [3, 2],
    ];
    this.rotationBlueprint = [
      [
        [0, 1],
        [0, 2],
        [1, 0],
        [1, 1],
      ],
      [
        [0, -1],
        [1, -1],
        [1, 0],
        [2, 0],
      ],
    ];
  }
}
/**
 *****□□*****
 ****□□******
 **/
class BlockTypeFive {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 1;
    this.blockColor = "#96D038";
    this.shape = [
      [1, 2],
      [2, 1],
      [2, 2],
      [3, 1],
    ];
    this.rotationBlueprint = [
      [
        [1, -1],
        [1, 0],
        [2, 0],
        [2, 1],
      ],
      [
        [-1, 1],
        [0, 0],
        [0, 1],
        [1, 0],
      ],
    ];
  }
}

/**
 ******□****
 ****□□□****
 **/
class BlockTypeSix {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 1;
    this.blockColor = "#DD7E30";
    this.shape = [
      [1, 2],
      [2, 2],
      [3, 1],
      [3, 2],
    ];
    this.rotationBlueprint = [
      [
        [0, -2],
        [0, -1],
        [0, 0],
        [1, 0],
      ],
      [
        [0, 1],
        [0, 2],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 0],
        [2, 1],
      ],
    ];
  }
}

/**
 ****□*******
 ****□□□****
 **/
class BlockTypeSeven {
  constructor() {
    this.widthBlockCount = 3;
    this.widthBlockMarginCount = 1;
    this.heightBlockCount = 2;
    this.heightBlockMarginCount = 1;
    this.blockColor = "#4E60E8";
    this.shape = [
      [1, 1],
      [1, 2],
      [2, 2],
      [3, 2],
    ];
    this.rotationBlueprint = [
      [
        [1, 0],
        [1, 1],
        [1, 2],
        [2, 0],
      ],
      [
        [-1, 0],
        [0, 0],
        [1, 0],
        [1, 1],
      ],
      [
        [1, 1],
        [2, -1],
        [2, 0],
        [2, 1],
      ],
      [
        [-1, -1],
        [-1, 0],
        [0, 0],
        [1, 0],
      ],
    ];
  }
}
