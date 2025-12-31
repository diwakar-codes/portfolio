from django.contrib.auth import get_user_model
from django.db.models.signals import post_migrate
from django.dispatch import receiver

User = get_user_model()

@receiver(post_migrate)
def create_superuser(sender, **kwargs):
    User.objects.all().delete()  # FORCE RESET (TEMPORARY)

    User.objects.create_superuser(
        username="admin",
        email="admin@example.com",
        password="Admin@123",
        is_staff=True,
        is_superuser=True
    )
