from .models import Contacts
from rest_framework import viewsets, permissions
from .serializers import ContactsSerializer

class ContactsViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = ContactsSerializer

    #Need to be authenticated to get contacts list
    def query_set(self):
        return self.request.user.contacts.all()
    
    #Need to be authenticated to submit form data
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)