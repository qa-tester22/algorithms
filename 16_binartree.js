/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */


// var findTarget = function (root, k) {
//     for (let i = 0; i < root.length; i+=2) {
//         for (let j = i + 1; j < root.length; j++) {
//             console.log(`k - root[i] = root[j]: ${k} - ${root[i]} = ${root[j]}`)
//             if ((root[i] + root[j]) == k) { return true }
//         }
//     }
//     return false
// }

// var findTarget = function (root, k) {

// return ((2 * root.slice(-1)[0] - 1) >= k)
// }

// let root = [5,3,6,2,4,null,7]
// let k = 9

// console.log(findTarget(root, k))

// ***********************************************************************************************************************
// function findTarget(root, target) {
//     const map = {};
//     const nodesToTraverse = [root];

//     while(nodesToTraverse.length) {
//         const node = nodesToTraverse.shift();

//         if(map[node.val] !== undefined) {
//             return true;
//         }

//         if(node.left) {
//             nodesToTraverse.unshift(node.left);
//         }

//         if(node.right) {
//             nodesToTraverse.unshift(node.right);
//         }

//         map[target - node.val] = node.val;
//     }

//     return false;
// }
//************************************************************************************************************************

/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function arrayToTree(arr) {
    if (arr.length === 0) return null;
  
    const nodes = arr.map(val => (val !== null ? new TreeNode(val) : null));
    const root = nodes.shift();
    const queue = [root];
  
    for (let node of nodes) {
        if (node !== null) {
            const parent = queue[0];
            if (parent.left === null) {
                parent.left = node;
            } else {
                parent.right = node;
                queue.shift();
            }
            queue.push(node);
        } else {
            queue.shift();
        }
    }
  
    return root;
}


var findTarget = function (root, k) {

    // В функции findTarget создается объект map для отслеживания узлов дерева, которые мы уже посетили. 
    //Также создается массив nodes, который используется для обхода дерева в ширину (BFS). Начальным элементом nodes является корень дерева.

    const map = {}
    const nodes = [root]

    //    `const nodes = [root];` создает массив `nodes` с одним элементом - корнем дерева `root`. 
    //В данном контексте, `nodes` используется для хранения узлов дерева, которые нужно обработать.

    // Изначально, мы помещаем корень дерева в nodes, чтобы начать обход с него. 
    // По мере обработки узлов, мы будем добавлять в nodes их потомков (если они существуют).

    // Таким образом, `nodes` служит для управления порядком обхода узлов в дереве в алгоритме, который ищет целевую сумму в узлах дерева.

    // создадим основной цикл, который продолжает выполнение, пока в массиве nodes есть элементы:


    while (nodes.length) {

        // Внутри цикла первым шагом мы извлекаем первый элемент из массива nodes:

        const node = nodes.shift()

        // Затем мы проверяем, есть ли в объекте map ключ с текущим значением узла. Если такой ключ уже существует, это означает, что мы нашли пару элементов, сумма которых равна k, и возвращаем true.
console.log (`node = ${node}, node.val = ${node.val}`)

        if (map[node.val] !== undefined) {
            return true
        }

        // Проверяем, есть ли у текущего узла левый и/или правый потомок, и если они есть, добавляем их в начало массива nodes 
        //(добавляем в начало для того, чтобы при следующей итерации мы обработали левого потомка перед правым):

        if (node.left) {
            nodes.unshift(node.left)
        }

        if (node.right) {
            nodes.unshift(node.right)
        }

        console.log(`map = ${map}`)

        // Если ключа нет, то мы добавляем текущее значение узла в объект map, используя k - node.val в качестве ключа:

        map[k - node.val] = node.val
    }

    // Если после завершения цикла не была найдена пара элементов с суммой k, возвращаем false:

    return false
};

// Синтаксис `if (node.left)` и `if (node.right)` используется для проверки наличия левого и правого потомков у текущего узла `node` в бинарном дереве поиска.

//В данном контексте:

//- `node.left` - проверяет, существует ли левый потомок у текущего узла. Если `node.left` не равен `null` или `undefined`, 
//это означает, что у узла есть левый потомок.
//- `node.right` - проверяет наличие правого потомка у текущего узла. Аналогично, если `node.right` не равен `null` или `undefined`,
// то у узла есть правый потомок.

//Если у узла есть соответствующий потомок, код добавляет его в начало массива `nodes` с помощью `nodes.unshift(node.left)` и `nodes.unshift(node.right)`. 
//Это делается потому, что в данном алгоритме мы используем обход в ширину (BFS), и мы хотим сначала обработать левого потомка перед правым.

//Таким образом, эти две проверки и действия обеспечивают корректное обход всех узлов в дереве в поисках пары элементов, сумма которых равна `k`.



let root = [5, 3, 6, 2, 4, null, 7]
let k = 9
// let k = 28

console.log(findTarget(root, k))