from django.shortcuts import render



def escena(request):
    return render(request, 'homeapp/escena.html')

def home(request):
    return render(request,'homeapp/home.html')
