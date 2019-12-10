from django.contrib import admin
from .models import User ,Ticket, Ct

class UserAdmin(admin.ModelAdmin):
    pass

class TicketAdmin(admin.ModelAdmin):
    pass

class CTAdmin(admin.ModelAdmin):
    pass

admin.site.register(User,UserAdmin)
admin.site.register(Ticket,TicketAdmin)
admin.site.register(Ct,CTAdmin)