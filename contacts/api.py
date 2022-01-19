from .models import Contacts
from rest_framework import viewsets, permissions
from .serializers import ContactsSerializer

class ContactsViewSet(viewsets.ModelViewSet):
    queryset = Contacts.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ContactsSerializer