<script lang="ts">
	import { enhance } from '$app/forms';
	import { Plus, MoreHorizontal } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuLabel,
		DropdownMenuSeparator,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
	import * as m from '$lib/paraglide/messages.js';

	let { data, form } = $props();

	let showForm = $state(false);

	function getInitials(name: string) {
		return name?.charAt(0).toUpperCase() || 'U';
	}

	function getRoleVariant(role: string): 'default' | 'secondary' | 'outline' | 'destructive' {
		switch (role.toLowerCase()) {
			case 'admin':
				return 'destructive';
			case 'lecturer':
				return 'secondary';
			default:
				return 'outline';
		}
	}

	function getRoleLabel(role: string) {
		switch (role) {
			case 'student':
				return m.users_role_student();
			case 'lecturer':
				return m.users_role_lecturer();
			case 'admin':
				return m.users_role_admin();
			default:
				return role;
		}
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">{m.users_title()}</h2>
			<p class="text-muted-foreground">{m.users_desc()}</p>
		</div>
		<Button onclick={() => (showForm = !showForm)}>
			<Plus class="mr-2 h-4 w-4" />
			{m.users_add_button()}
		</Button>
	</div>

	{#if showForm}
		<Card>
			<CardHeader>
				<CardTitle>{m.users_create_title()}</CardTitle>
				<CardDescription>{m.users_create_desc()}</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					method="POST"
					action="?/create"
					use:enhance
					onsubmit={() => (showForm = false)}
					class="space-y-4"
				>
					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div class="grid gap-2">
							<Label for="fullName">{m.users_form_fullname()}</Label>
							<Input type="text" name="fullName" id="fullName" required placeholder="John Doe" />
						</div>
						<div class="grid gap-2">
							<Label for="email">{m.users_form_email()}</Label>
							<Input type="email" name="email" id="email" required placeholder="john@example.com" />
						</div>
						<div class="grid gap-2">
							<Label for="password">{m.users_form_password()}</Label>
							<Input type="password" name="password" id="password" required />
						</div>
						<div class="grid gap-2">
							<Label for="roleName">{m.users_form_role()}</Label>
							<select
								id="roleName"
								name="roleName"
								class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
							>
								<option value="student">{m.users_role_student()}</option>
								<option value="lecturer">{m.users_role_lecturer()}</option>
								<option value="admin">{m.users_role_admin()}</option>
							</select>
						</div>
					</div>
					<div class="flex justify-end gap-2 pt-2">
						<Button type="button" variant="outline" onclick={() => (showForm = false)}
							>{m.users_cancel()}</Button
						>
						<Button type="submit">{m.users_create_submit()}</Button>
					</div>
				</form>

				{#if form?.error}
					<div class="mt-4 rounded-md bg-destructive/15 p-3 text-sm font-medium text-destructive">
						{form.error}
					</div>
				{/if}
				{#if form?.success}
					<div class="mt-4 rounded-md bg-green-500/15 p-3 text-sm font-medium text-green-700">
						{m.users_success()}
					</div>
				{/if}
			</CardContent>
		</Card>
	{/if}

	<Card>
		<CardContent class="p-0">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>{m.users_table_user()}</TableHead>
						<TableHead>{m.users_table_email()}</TableHead>
						<TableHead>{m.users_table_role()}</TableHead>
						<TableHead class="text-right">{m.users_table_actions()}</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each data.users as user (user.id)}
						<TableRow>
							<TableCell class="font-medium">
								<div class="flex items-center gap-3">
									<Avatar class="h-8 w-8">
										<AvatarFallback>{getInitials(user.full_name)}</AvatarFallback>
									</Avatar>
									<span>{user.full_name}</span>
								</div>
							</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>
								<Badge variant={getRoleVariant(user.role)} class="capitalize">
									{getRoleLabel(user.role)}
								</Badge>
							</TableCell>
							<TableCell class="text-right">
								<DropdownMenu>
									<DropdownMenuTrigger>
										{#snippet child({ props })}
											<Button {...props} variant="ghost" size="icon" class="h-8 w-8 p-0">
												<span class="sr-only">Open menu</span>
												<MoreHorizontal class="h-4 w-4" />
											</Button>
										{/snippet}
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>Actions</DropdownMenuLabel>
										<DropdownMenuItem onclick={() => navigator.clipboard.writeText(user.email)}>
											{m.users_action_copy_email()}
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>{m.users_action_edit()}</DropdownMenuItem>
										<DropdownMenuItem class="text-destructive"
											>{m.users_action_delete()}</DropdownMenuItem
										>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					{:else}
						<TableRow>
							<TableCell colspan={4} class="h-24 text-center">
								{m.users_no_data()}
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
