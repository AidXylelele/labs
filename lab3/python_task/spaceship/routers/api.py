from fastapi import APIRouter
import numpy as np
router = APIRouter()


@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}

@router.get('/matrix')
def matrix() -> dict:
    a = np.random.rand(10, 10)
    b = np.random.rand(10, 10)

    result = np.dot(a, b)

    response = {
        "matrix_a": a.tolist(),
        "matrix_b": b.tolist(),
        "product": result.tolist()
    }

    return response