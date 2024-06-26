#!/usr/bin/env python3
''' Chaima Ben SLima '''
import asyncio
from typing import List

async_generator = __import__("0-async_generator").async_generator


async def async_comprehension() -> List[float]:
    """return a list"""
    result = [result async for result in async_generator()]
    return result
