from rest_framework import routers
from .api import ContactsViewSet

router = routers.DefaultRouter()
router.register('api/contacts', ContactsViewSet, 'contacts')

urlpatterns = router.urls
