from fastapi import APIRouter

router = APIRouter()


@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}

@router.get('/matrix')
def matrix() -> dict:
    firstRows = 10
    firstCol = 10
    secondRows = 10
    secondCol = 10
    if firstCol != secondRows:
        response = {
            'result': 'Error!'
        }
    else:
        first_matrix = numpy.random.rand(firstRows, firstCol)
        second_matrix = numpy.random.rand(secondRows, secondCol)
        result = numpy.dot(first_matrix, second_matrix)
        response = {
            "matrix_a": first_matrix.tolist(),
            "matrix_b": second_matrix.tolist(),
            "product": result.tolist()
        }

    return response