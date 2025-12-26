from django.contrib import admin
from .models import Experience, Project, Education, Skill, ContactMessage, Resume
# Register your models here.
admin.site.register(Experience)
admin.site.register(Project)
admin.site.register(Education)
admin.site.register(Skill)
admin.site.register(ContactMessage)

from .models import LinkedInPost

@admin.register(LinkedInPost)
class LinkedInPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'activity_id', 'is_active', 'created_at')
    list_filter = ('is_active',)
    search_fields = ('title', 'activity_id')


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ("title", "uploaded_at")