from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend

class EmailBackend(ModelBackend):
    def authenticate(self, request, password=None, email=None, **kwargs):

        if not email:
            email = kwargs.get('username')
            if not email:
                return None
        
        UserModel = get_user_model()
        
        try:
            user = UserModel.objects.get(email=email)
        except UserModel.DoesNotExist:
            return None
        
        else:
            if user.check_password(password):
                return user
        return None
    
    def get_user(self, user_id):
        user = get_user_model()
        try:
            return user.objects.get(pk=user_id)
        except user.DoesNotExist:
            return None
        
class PhoneBackend(ModelBackend):
    def authenticate(self, request, password=None, phone=None, **kwargs):
        if not phone:
            return None
        
        UserModel = get_user_model()
        try:
            user = UserModel.objects.get(phone=phone)
        except UserModel.DoesNotExist:
            return None
        else:
            if user.check_password(password):
                return user
        return None
    
    def get_user(self, user_id):
        user = get_user_model()
        try:
            return user.objects.get(pk=user_id)
        except user.DoesNotExist:
            return None