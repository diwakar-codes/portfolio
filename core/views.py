from urllib import request
from django.shortcuts import redirect, render
from django.core.mail import send_mail
from .models import Experience, Project, Education, ContactMessage, Skill, LinkedInPost
from portfolio.settings import EMAIL_HOST_USER, EMAIL_HOST_PASSWORD
# Create your views here.
def home(request):
    linkedin_posts = LinkedInPost.objects.filter(is_active=True)
    resume = Resume.objects.last()  # latest uploaded resume

    return render(request, 'home.html', {
        'linkedin_posts': linkedin_posts,
        'resume': resume
    })
def contact(request):
    if request.method == 'POST':
        email = request.POST['email']
        message = request.POST['message']   

        ContactMessage.objects.create(email=email, message=message)
        
        send_mail(
            subject='New Contact Message',
            message=f"From: {email}\n\nMessage:\n{message}",
            from_email=EMAIL_HOST_USER,
            recipient_list=[EMAIL_HOST_USER],
        )
        return redirect('contact')
    return render(request, 'contact.html')

def projects(request):
    return render(request, 'projects.html', {'data': Project.objects.all()})

def experience(request):
    return render(request, 'experience.html', {'data': Experience.objects.all()})

def education(request):
    return render(request, 'education.html', {'data': Education.objects.all()})

def skills(request):
    return render(request, 'skills.html', {'data': Skill.objects.all()})


from .models import Resume

def resume(request):
    resume = Resume.objects.last()
    return render(request, "resume.html", {"resume": resume})
