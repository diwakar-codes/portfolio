from django.db import models

# Create your models here.

class Experience(models.Model):
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    duration = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return f"{self.role} at {self.company}"
    
class Project(models.Model):
    title = models.CharField(max_length=100)
    tech_stack = models.CharField(max_length=200)
    description = models.TextField()
    link = models.URLField(blank=True)

    def __str__(self):
        return self.title
    
class Education(models.Model):
    degree = models.CharField(max_length=150)
    institution = models.CharField(max_length=150)
    year = models.CharField(max_length=50)

    class Meta:
        ordering = ['-year']

    def __str__(self):
        return f"{self.degree} ({self.year})"


class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('Backend', 'Backend'),
        ('Frontend', 'Frontend'),
        ('ML', 'Machine Learning'),
        ('Libraries', 'Libraries'),
        ('Tools', 'Tools'),
        ('Programming', 'Programming Languages'),
    ]
    name = models.CharField(max_length=50)
    level = models.CharField(max_length=50, help_text="e.g., Beginner, Intermediate, Expert")
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    def __str__(self):
        return self.name
    
class ContactMessage(models.Model):
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
    
class Resume(models.Model):
    title = models.CharField(max_length=100, default="My Resume")
    file = models.FileField(upload_to="resumes/")
    uploaded_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        if self.is_active:
            Resume.objects.filter(is_active=True).update(is_active=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    

class LinkedInPost(models.Model):
    title = models.CharField(max_length=200, blank=True)
    activity_id = models.CharField(
        max_length=50,
        help_text="Example: 7340284008175411200"
    )
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title or self.activity_id