from django.contrib.auth.backends import ModelBackend
from .models import User

class MeridianoAuthenticate(ModelBackend):
    def authenticate(self,request,username=None,password=None):
        print ("intenta autenticar")
        try:
            user=User.objects.get(username=username)
            userPassword=user.password
            if userPassword==password:
                print("autentica")
                return user

        except ObjectDoesNotExist:
            return None

        