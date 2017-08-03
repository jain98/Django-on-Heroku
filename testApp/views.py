from django.shortcuts import render, redirect
from django.http import HttpResponse

def demo(request):
    return render(request, 'index.html')
